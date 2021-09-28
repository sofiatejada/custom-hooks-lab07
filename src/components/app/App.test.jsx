import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../characters/CharacterList';
import Character from '../characters/Character';
import { MemoryRouter } from 'react-router-dom';


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
  it('displays a list of characters', async () => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    const list = await screen.findByLabelText('character-list');
    expect(list).toMatchSnapshot();
  });
});
