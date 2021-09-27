import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../characters/CharacterList';
import Character from '../characters/Character';


describe('character component', () => {
  it('displays a character', () => {
    render(
      <Character 
        id="1" 
        name="poop"
        image="example.png" />
    );

    const article = screen.getByRole('img', { name: 'image of poop' });
    expect(article).toMatchSnapshot();
  });
});

describe('character list component', () => {
  it('displays a list of characters', () => {
    render(
      <CharacterList />
    );

    const gif = screen.getByRole('img', { name: 'loading gif' });
    expect(gif).toMatchSnapshot();
  });
});
