import React, { useCallback, useEffect, useState } from 'react';
import { EntityForm } from './components/EntityForm';
import { EntitiesTable } from './components/EntitiesTable';
import type { Entity } from './types';

const API_BASE = `${window.location.protocol}//${window.location.hostname}:8080/api`;

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [entities, setEntities] = useState<Entity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchEntities = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/entities`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data: Entity[] = await res.json();
      setEntities(data);
    } catch (e) {
      console.error(e);
      setError('Failed to fetch entities');
    }
  }, []);

  useEffect(() => {
    fetchEntities();
  }, [fetchEntities]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (!name || !email) {
      setError('Name and email are required');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/entities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          age: age ? Number(age) : null,
        }),
      });
      if (!res.ok) throw new Error('Failed to create');
      setName('');
      setEmail('');
      setAge('');
      await fetchEntities();
    } catch (e) {
      console.error(e);
      setError('Failed to submit entity');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h1>Guardz - User Entities</h1>
      <p className="info">
        Fill in the form and submit to add a new entity. All submitted entities are displayed in the table below.
      </p>
      <EntityForm
        name={name}
        email={email}
        age={age}
        setName={setName}
        setEmail={setEmail}
        setAge={setAge}
        loading={loading}
        onSubmit={handleSubmit}
        error={error}
      />
      <h2>Submitted Entities</h2>
      <EntitiesTable entities={entities} />
    </div>
  );
};

export default App;
