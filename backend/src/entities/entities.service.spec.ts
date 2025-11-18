import { EntitiesService } from './entities.service';

describe('EntitiesService', () => {
  let service: EntitiesService;

  beforeEach(() => {
    service = new EntitiesService();
    service.clear();
  });

  it('creates and returns entities', () => {
    const created = service.create({ name: 'Alice', email: 'alice@example.com', age: 30 });
    expect(created.id).toBe(1);
    expect(created.name).toBe('Alice');

    const all = service.findAll();
    expect(all.length).toBe(1);
    expect(all[0].email).toBe('alice@example.com');
  });
});
