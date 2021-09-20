import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import Character from '../characters/Character';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/:id" component={Character} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
