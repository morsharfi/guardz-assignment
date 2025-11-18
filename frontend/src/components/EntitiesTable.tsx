import React from 'react';
import type { Entity } from '../types';

interface EntitiesTableProps {
  entities: Entity[];
}

export const EntitiesTable: React.FC<EntitiesTableProps> = ({ entities }) => {
  if (!entities || entities.length === 0) {
    return <p>No entities submitted yet.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {entities.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.age ?? ''}</td>
            <td>{new Date(e.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
