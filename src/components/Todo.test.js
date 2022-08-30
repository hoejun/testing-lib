import React from 'react';
import { render, screen, fireEvent, getByLabelText, getByText } from '@testing-library/react';
import Todo from './Todo';

//describe와 it은 함께
//describe는 그룹화 it은 테스트 케이스
//it과 test는 기능적으로 동일
//rtl은 중첩없이 test를 쓰기를 권장하고 있다.
//expect 테스트 통과 조건
//rtl은 await 코드들이 모두 동작한 후 다음 동작이 되도록 코딩을 할때 waitFor메소드를 사용한다.
// describe('Tests from Todo component', () => {
//   // it('Should add new task when form has been submitted', async () => {
//   //   //render todo
//   //   //render 화면에 Todo 컴포넌트가 보이는지 테스트
//   //   const { getByTestId, getByText } = render(<Todo />);

//   //   const fieldNode = await getByTestId('form-field');

//   //   const newTask = 'testing';
//   //   fireEvent.change(fieldNode, { target: { value: newTask } });
//   //   expect(fieldNode.value).toEqual(newTask);

//   //   const btnNode = await getByTestId('form-btn');
//   //   fireEvent.click(btnNode);

//   //   const tdNode = await getByText(newTask);

//   //   expect(tdNode).toBeDefined();
//   // });
//   test('Add new task라는 텍스트가 보이는지 테스트', () => {
//     //render todo
//     //render 화면에 Todo 컴포넌트가 보이는지 테스트
//     render(<Todo />);
//     // if (
//     //   ('getByText',
//     //   () => {
//     //     render(<Todo />);
//     //     screen.getByText('home');
//     //   })
//     // );

//     screen.getByText('home');
//     // const text = screen.getByText('Add new task');
//     // const button = screen.getByRole('button', {
//     //   name: 'Add new task',
//     // });

//     // expect(button).toBeInDocument();
//   });
// });

test('home라는 텍스트가 있다.', () => {
  render(<Todo />);

  const text = screen.getByText('home');

  expect(text).toBeInTheDocument();
});

test('input 태그의 텍스트가 제대로 입력되어있다.', () => {
  const { getByTestId, getByText } = render(<Todo />);
  const fieldNode = getByTestId('form-field');

  //form 테스트
  const newTask = 'testing';
  fireEvent.change(fieldNode, { target: { value: newTask } });
  //fieldNode.value와 newTask가 같은것인지 확인
  //expect는 검증 메소드
  expect(fieldNode.value).toEqual(newTask);

  //getByText는 사용을 지양해야한다.
  //element를 선택하는 방법 2가지
  //screen.getByText(/hello world/i); -> 태그 안에 있는 text를 기준으로 element를 선택, 다른 element를 선택할 확률이 있음
  //screen.getByTestId('helloWorld'); -> data-testid 속성의 값을 기준으로 선택 되기 때문에 안정성 높음.
  const btnNode = getByTestId('form-btn');
  fireEvent.click(btnNode);

  const tdNode = getByText(newTask);
  expect(tdNode).toBeDefined();
  // const onSubmit = jest.fn();
  // const inputValue = '숫자 텍스트';

  // fireEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
  // fireEvent.click(getByText(/확인/i));

  // expect(onSubmit).toBeCalled();
});
