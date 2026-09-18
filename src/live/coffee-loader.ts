import type { LiveLoader } from 'astro/loaders';

interface Coffee {
  id: number;
  title: string;
  description: string;
}

const fallbackCoffee: Coffee = {
  id: 0,
  title: 'Black Coffee',
  description:
    'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm.',
};

export const coffeeLoader: LiveLoader<Coffee, { id: string }> = {
  name: 'coffee',

  // This loader only supports the single 'recommendation' entry.
  // loadCollection() is still required by the LiveLoader interface.
  loadCollection: async () => ({
    entries: [],
  }),

  loadEntry: async ({ filter }) => {
    if (filter?.id !== 'recommendation') return undefined;

    try {
      const response = await fetch(
        'https://api.sampleapis.com/coffee/hot'
      );

      if (!response.ok) {
        throw new Error(`Coffee API returned ${response.status}`);
      }

      const coffees: Coffee[] = await response.json();

      // Excludes test records that were added with higher IDs
      const recommendations = coffees.filter(
        (item) => item.id >= 1 && item.id <= 20
      );

      if (recommendations.length === 0) {
        throw new Error('Coffee API returned no recommendations');
      }

      const coffee =
        recommendations[
          Math.floor(Math.random() * recommendations.length)
        ];

      return {
        id: 'recommendation',
        data: coffee,
      };
    } catch (error) {
      console.error('Coffee API request failed:', error);

      return {
        id: 'recommendation',
        data: fallbackCoffee,
      };
    }
  },
};
