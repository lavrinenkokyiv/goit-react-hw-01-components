import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../components/Profile/user.json';
import data from '../components/Statistics/statistical-data.json';
import friends from '../components/FriendList/friends.json'; 
import transactions from '../components/TransactionHistory/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.appstyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}