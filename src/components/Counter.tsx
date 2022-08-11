import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from '@redux/reducers/counterSlice';
import {
    Container,
    Button,
    Typography,
    Input
} from '@mui/material';

const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = React.useState('2');
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <Container>
          <Container>
            <Button
              onClick={() => dispatch(decrement())}
            >
              -
            </Button>
            <Typography>{count}</Typography>
            <Button
              onClick={() => dispatch(increment())}
            >
              +
            </Button>
          </Container>
          <Container>
            <Input
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <Button
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Amount
            </Button>
            <Button
              onClick={() => dispatch(incrementAsync(incrementValue))}
            >
              Add Async
            </Button>
            <Button
              onClick={() => dispatch(incrementIfOdd(incrementValue))}
            >
              Add If Odd
            </Button>
          </Container>
        </Container>
      )
};

export default Counter;