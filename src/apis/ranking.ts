import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tracer.scuba.finance',
  timeout: 2500,
});


type RankItem = {
  user_addr: string;
  experience: number;
  post_email: string;
}

type RankingListResponse = {
  code: number;
  data: {
    page: string;
    total: string;
    result: RankItem[]
  };
  msg: string;
}

export const getRankList = async (offset: number, limit: number = 10): Promise<RankingListResponse> => {
  try {
    const { data } = await apiClient.post<RankingListResponse>(
      '/user/addressall',
      {
        offset,
        limit
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export const getRankPosition = async (address: string, limit: number = 10): Promise<RankingListResponse> => {
  try {
    const { data } = await apiClient.post<RankingListResponse>(
      '/user/addressjump',
      {
        user_addr: address,
        limit
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}