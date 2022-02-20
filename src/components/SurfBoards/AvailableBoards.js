import classes from './AvailableBoards.module.css';
import Card from '../UI/Card/Card';
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



const AvailableBoards = props => {
  const boardsList = DUMMY_BOARDS.map((board) =>
    <BoardItem key={board.id} name={board.name}
      desc={board.description} price={board.price}></BoardItem>
  );

  return (
    <Card className={classes.boards}>
      <ul>
        {boardsList}
      </ul>
    </Card>
  );
};


export default AvailableBoards;