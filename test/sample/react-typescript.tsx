import React from 'react';

interface Props {
  name?: string;
}

export function Hello({ name = 'World' }: Props) {
  return <h1>Hello, {name}</h1>;
}
