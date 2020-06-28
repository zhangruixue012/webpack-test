import React from 'react';
import Link from '..';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  
    const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://www.facebook.com">Facebook</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

// Updated test case with a Link to a different address
it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://www.instagram.com">Instagram</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });



it('will check the matchers and pass', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
    });
});