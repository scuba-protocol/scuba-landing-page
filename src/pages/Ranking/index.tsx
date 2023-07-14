import cx from 'classnames';
import { Table } from 'antd';

import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
import { ReactComponent as PaginationPrev } from '@assets/icons/pagination-prev.svg';
import { ReactComponent as PaginationNext } from '@assets/icons/pagination-next.svg';

import React, { useEffect, useState } from 'react';
import { getRankList, getRankPosition } from '@apis/ranking';

import modules from './index.module.scss';

type TableRankItem = {
  key: string;
  rank: number;
  experience: number;
  address: string;
}

type RankingPageState = {
  page: string;
  total: string;
  list: TableRankItem[];
  highlight: number;
}

const columns = [
  {
    key: 'rank',
    dataIndex: 'rank',
    title: 'Rank',
    align: 'center' as any,
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: 'Address',
    render: (label: string) => <div className={modules.rankingPageAddressCell}>{label}</div>
  },
  {
    key: 'experience',
    dataIndex: 'experience',
    title: 'Points',
  },
];

const PER_PAGE_LIMIT = 3;

const Ranking: React.FC = () => {
  const [fetching, setFetching] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [current, setCurrent] = useState<RankingPageState>({ page: '0', total: '0', list: [], highlight: -1 });

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: address } = event.target;
    setAddress(address);
  }

  const handleRankList = (page: number) => {
    setFetching(true);
    getRankList((page - 1) * PER_PAGE_LIMIT, PER_PAGE_LIMIT)
      .then(response => {
        const { page, result, total } = response.data;
        setCurrent({
          page,
          list: result.map(({ experience, user_addr: address }, index) => ({
            key: address,
            rank: (+page * PER_PAGE_LIMIT) + (index + 1),
            experience,
            address,
          })),
          total,
          highlight: -1,
        });
      })
      .finally(() => setFetching(false));
  }

  const handleSearch = () => {
    setFetching(true);
    if (!address) {
      setCurrent({ page: '0', total: '0', list: [], highlight: -1 });
      return handleRankList(1);
    }
    return getRankPosition(address, PER_PAGE_LIMIT)
      .then(response => {
        const { page, result, total } = response.data;
        setCurrent({
          page,
          list: result.map(({ experience, user_addr: address }, index) => ({
            key: address,
            rank: (+page * PER_PAGE_LIMIT) + (index + 1),
            experience,
            address
          })),
          total,
          highlight: result.findIndex(({ user_addr }) => address === user_addr)
        });
      })
      .finally(() => setFetching(false));
  }

  const handleHighlight = () => {
    const ele = document.querySelector(`.ant-table-row:nth-of-type(${current.highlight + 1})`);
    if (ele) {
      ele.classList.add(modules.rankingPageHighlight);
      ele.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  useEffect(() => {
    // handleRankList(1);
  }, []);

  useEffect(() => {
    if (current.highlight >= 0) {
      handleHighlight();
    }
  }, [current.highlight]);

  return (
    <div className={cx('flex flex-col relative items-start z-30 overflow-hidden pb-96', modules.rankingPage)}>
      <div className="absolute z-10 bg-radial/90 w-80 h-80 bottom-96 left-0 -translate-x-1/3 translate-y-1/2 rounded-full app-radial" />
      <div className="relative w-screen pt-16 pb-4">
        <div className="absolute z-10 bg-active/50 w-80 h-80 top-0 -left-7 rounded-full app-radial" />
        <div className="absolute z-10 bg-blue/50 w-80 h-80 -bottom-7 -right-7 rounded-full app-radial" />
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] w-full max-w-app mx-auto">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-[3.75rem] items-center">
              <div className="app-slogan px-28 text-center">
                The ‘Treasure Looting’ Leader Board
              </div>
              <div className="font-medium text-lg leading-[1.2] text-white/80">
                The ‘Treasure Looting’ Campaign is here—Celebrate the First Beta Test of Scuba!
              </div>
              <div className="flex items-center">
                <button className="btn-primary btn-primary--active">
                  Start Testing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen max-w-[75rem] mx-auto px-6">
        <div className="max-w-[37.5rem] mx-auto text-center pb-6">
          <div className="text-base leading-7 text-white/50 mb-4">
            Search by Address
          </div>
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-4" />
            <input
              type="text"
              className="app-input-address flex-1 rounded-full pl-12 pr-16"
              placeholder="Please Enter Address"
              value={address}
              onChange={handleAddressChange}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              className={cx(
                'btn-launch btn-launch--active absolute right-2 z-10',
              )}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <Table
          className={modules.rankingPageTable}
          dataSource={current.list}
          loading={fetching}
          columns={columns}
          pagination={{
            total: +current.total,
            current: +current.page + 1,
            pageSize: PER_PAGE_LIMIT,
            position: ['bottomCenter'],
            onChange: handleRankList,
            itemRender: (page, type) => {
              switch (type) {
                case 'next':
                  return <div className={modules.rankingPagePaginationAction}><PaginationNext /></div>
                case 'prev':
                  return <div className={modules.rankingPagePaginationAction}><PaginationPrev /></div>
                default:
                  return <div className={modules.rankingPagePaginationAction}>{page}</div>
              }
            } 
          }}
        />
      </div>
    </div>
  )
}

export default Ranking;
