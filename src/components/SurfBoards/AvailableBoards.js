import { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import CircularColor from '../UI/Loader';
import classes from './AvailableBoards.module.css';
import BoardItem from './BoardItem';

const DUMMY_BOARDS = [
  {
    id: 'b1',
    name: 'Rusty',
    description: 'best board ever',
    price: 22.99,
  },
  {
    id: 'b2',
    name: 'Soft',
    description: 'good for begginers',
    price: 16.5,
  },
  {
    id: 'b3',
    name: 'Interface',
    description: 'the radical board in the world!',
    price: 12.99,
  },
  {
    id: 'b4',
    name: 'UltraWave',
    description: 'for mid level big surfers',
    price: 18.99,
  },
];

const url = 'http://localhost:9000/boards/';

const AvailableBoards = props => {

  const [boards, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error('Error While Fetching');
      }

      const boards = [];

      for (const key in responseData) {
        boards.push({
          id: responseData[key]._id,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,

        });
      }

      setHasError(false);
      setBoards(boards);
      setIsLoading(false);
    }

    fetchMeals().catch(error => {
      setHasError(true);
      setIsLoading(false);
      setBoards(null);
    });


  }, [])

  let content;

  if (hasError)
    content = <p>There is an Error :)</p>
  else {
    if (isLoading)
      content = <CircularColor />
    else {
      
      content = <ul>
        {boards.map((board) =>
          <BoardItem key={board.id} name={board.name} id={board.id}
            desc={board.description} price={board.price}></BoardItem>
        )}
      </ul>;
    }
  }

  return (
    <Card className={classes.boards}>
    {content}
    </Card>
  );
};


export default AvailableBoards;