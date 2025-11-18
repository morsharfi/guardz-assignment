import React from 'react';

interface EntityFormProps {
  name: string;
  email: string;
  age: string;
  setName: (v: string) => void;
  setEmail: (v: string) => void;
  setAge: (v: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

export const EntityForm: React.FC<EntityFormProps> = ({
  name,
  email,
  age,
  setName,
  setEmail,
  setAge,
  loading,
  onSubmit,
  error,
}) => {
  return (
    <>
      {error && <div className="error">{error}</div>}
      <form onSubmit={onSubmit} className="form-grid">
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />
        </label>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            type="email"
            required
          />
        </label>
        <label>
          Age
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Optional"
            type="number"
            min="0"
            max="150"
          />
        </label>
        <div className="button-wrapper">
          <button className="submit" type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
};
