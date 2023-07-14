import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

import MainLayout from './layouts/MainLayout'

import Main from '@pages/Main'
import Campaign from '@pages/Campaign';
import Ranking from '@pages/Ranking';

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="leaderBoard" element={<Ranking />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  ,
)
