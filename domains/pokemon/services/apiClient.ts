import axios from 'axios';
import aspida from '@aspida/axios';
import api from '../../../api/$api';

const baseURL = 'https://pokeapi.co/api';
export const apiClient = api(aspida(axios, { baseURL }));
