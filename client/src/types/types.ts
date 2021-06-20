type Account = {
  address: string;
  phone: string;
  cUSDBalance: string;
  nickName: string;
  donated?: number;
  raised?: number;
};

type FundRaiser = {
  nickName: string;
  id: string;
  celoAddress: string;
  totalRaised: number;
  content: string;
  upVotes: number;
};

type NavigationProps = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};
