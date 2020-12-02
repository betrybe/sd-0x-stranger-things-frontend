import axios from 'axios';

const deafultTimeout = 30000;
class CharactersService {
  constructor({ url = 'http://localhost:3000', timeout = deafultTimeout }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
