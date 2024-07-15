export interface FilterOption {
  id: string;
  label: string;
  exclusive?: boolean;
}

export interface FilterConfig {
  title: string;
  options: FilterOption[];
}

const filterConfig: FilterConfig = {
  title: 'numberOfTransfers',
  options: [
    {id: 'all', label: 'all', exclusive: true},
    {id: '0', label: 'nonStop'},
    {id: '1', label: 'oneStop'},
    {id: '2', label: 'twoStops'},
    {id: '3', label: 'threeStops'},
  ],
};

export default filterConfig;
