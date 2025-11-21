import { INITIAL_DATA } from '@/constants/initial_data';
import { UserListRequestBody } from '@/types/users';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@mock_database';

const simulateDelay = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

class MockDatabase {
  async init() {
    try {
      const existingData = await AsyncStorage.getItem(STORAGE_KEY);
      if (!existingData) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
        console.log('Database initialized with initial data');
      }
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }

  async reset() {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
      console.log('Database reset to initial data');
    } catch (error) {
      console.error('Error resetting database:', error);
      throw error;
    }
  }

  async _getData() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : INITIAL_DATA;
    } catch (error) {
      console.error('Error reading data:', error);
      throw error;
    }
  }

  async _saveData(data: any) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  }

  //   // Mock API: Load user list (simple version)
  //   async loadUserList(delay = 500) {
  //     await simulateDelay(delay);
  //     try {
  //       const data = await this._getData();

  //       // Return all users without cats array (optimized for list view)
  //       const users = data.users.map(({ id, firstName, lastName, favourite, cats }) => ({
  //         id,
  //         firstName,
  //         lastName,
  //         favourite,
  //         catsCount: cats.length
  //       }));

  //       return {
  //         success: true,
  //         data: users,
  //         timestamp: new Date().toISOString()
  //       };
  //     } catch (error) {
  //       return {
  //         success: false,
  //         error: error.message
  //       };
  //     }
  //   }
  // }

  async loadUserList(options: UserListRequestBody, delay = 500) {
    await simulateDelay(delay);
    try {
      const { page, limit, sortBy } = options;

      const data = await this._getData();
      let users = [...data.users];

      users.sort((a, b) => {
        let comparison = 0;

        if (sortBy === 'name') {
          const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
          const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
          comparison = nameA.localeCompare(nameB);
        } else if (sortBy === 'cats') {
          comparison = a.cats.length - b.cats.length;
        }

        return comparison;
      });

      const totalUsers = users.length;
      const totalPages = Math.ceil(totalUsers / limit);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedUsers = users
        .slice(startIndex, endIndex)
        .map(({ id, firstName, lastName, favourite, children }) => ({
          id,
          firstName,
          lastName,
          favourite,
          childrenCount: children.length
        }));

      return {
        success: true,
        data: paginatedUsers,
        pagination: {
          page,
          limit,
          totalItems: totalUsers,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1
        },
        filters: { sortBy },
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch user list',
      };
    }
  }

  async loadUserDetail(id: number, delay = 300) {
    await simulateDelay(delay);
    try {
      const data = await this._getData();
      const user = data.users.find((u: any) => u.id === id);

      if (!user) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      return {
        success: true,
        data: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          favourite: user.favourite,
          children: user.children
        },
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to load owner detail'
      };
    }
  }

  async setUserFavourite(id: number, delay = 300) {
    await simulateDelay(delay);
    try {
      const data = await this._getData();
      const userIndex = data.users.findIndex((u: any) => u.id === id);

      if (userIndex === -1) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      data.users[userIndex].favourite = !data.users[userIndex].favourite;
      await this._saveData(data);

      return {
        success: true,
        data: {
          id: data.users[userIndex].id,
          favourite: data.users[userIndex].favourite
        },
        message: `User ${data.users[userIndex].favourite ? 'added to' : 'removed from'} favourites`,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to favourite the user'
      };
    }
  }
}

export default new MockDatabase();
