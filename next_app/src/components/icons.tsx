import {
  Home,
  ClipboardList,
  LayoutGrid,
  Banknote,
  Users,
  Zap,
  Wallet,
  ChevronDown,
  Search,
  HelpCircle,
  MessageSquareMore,
  Download,
  ArrowUpDown,
  Info,
  type XIcon as LucideIcon,
  ChevronLeft,
  ChevronRight,
  Menu,
  FolderClosed,
  Box,
  Bug,
  Store,
  Settings,
  PlayCircle,
  Trash2,
  PlusIcon,
  PlusCircle,
  CheckCircle2Icon,
  XCircle,
  Loader,
  Copy,
  Check,
  RefreshCwIcon,
  Folder,
  Play,
  SquarePlus,
  LucideProps,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  home: Home,
  tasks: ClipboardList,
  boxes: LayoutGrid,
  money: Banknote,
  users: Users,
  plugins: Zap,
  wallet: Wallet,
  arrowDown: ChevronDown,
  arrowLeft: ChevronLeft,
  arrowRight: ChevronRight,
  search: Search,
  helpCircle: HelpCircle,
  download: Download,
  sort: ArrowUpDown,
  chat: MessageSquareMore,
  info: Info,
  menu: Menu,
  projects: FolderClosed,
  deploy: Box,
  test: Bug,
  browser: Store,
  settings: Settings,
  executeCode: PlayCircle,
  delete: Trash2,
  add: PlusIcon,
  addCircle: PlusCircle,
  codeSuccess: CheckCircle2Icon,
  codeError: XCircle,
  codeRunning: Loader,
  copy: Copy,
  tick: Check,
  refresh: RefreshCwIcon,
  folder: Folder,
  play: Play,
  sqPlus: SquarePlus,

  golfFlag: ({ ...props }: LucideProps) => (
    <svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.0769 5.67823C34.9214 7.66835 33.5532 9.82949 31.4232 11.4465C29.5186 12.8924 25.3906 15.1235 19.086 13.8797C13.5821 12.7913 9.86613 15.0536 8.03149 20.6041L13.3955 38.4996C13.4813 38.7965 13.447 39.1152 13.3002 39.3871C13.1533 39.6589 12.9056 39.8623 12.6103 39.9534C12.5016 39.9841 12.3891 39.9998 12.276 40C12.0249 39.9998 11.7805 39.9188 11.5789 39.769C11.3773 39.6192 11.2293 39.4086 11.1566 39.1682L5.76151 21.1716C5.69579 21.0428 5.65366 20.9033 5.63713 20.7596L1.43922 6.75103C1.34457 6.58752 1.2912 6.40341 1.28375 6.21463L0.451938 3.44712C0.406475 3.30018 0.390569 3.14569 0.40514 2.99257C0.41971 2.83944 0.464468 2.69073 0.53683 2.555C0.609191 2.41927 0.707722 2.29922 0.826733 2.20178C0.945745 2.10434 1.08288 2.03144 1.23022 1.98729C1.37756 1.94314 1.53219 1.92861 1.68517 1.94455C1.83816 1.96048 1.98647 2.00657 2.12155 2.08014C2.25662 2.1537 2.37579 2.2533 2.47217 2.37318C2.56854 2.49306 2.64021 2.63083 2.68305 2.77856L2.83075 3.28387C3.83996 2.14935 5.11757 1.28603 6.54668 0.772896C10.2393 -0.610858 15.1446 -0.113328 19.3425 2.07891C21.9235 3.4238 28.4846 6.36233 33.5066 4.48882C33.6907 4.42179 33.8886 4.40195 34.0824 4.43114C34.2761 4.46033 34.4594 4.5376 34.6156 4.65589C34.7718 4.77419 34.8959 4.92974 34.9764 5.10833C35.057 5.28692 35.0915 5.48285 35.0769 5.67823Z"
        fill="white"
      />
    </svg>
  ),

  smiley: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39.9482 21.64C40.1546 18.7783 39.7429 15.9056 38.7412 13.2171C37.7395 10.5285 36.1712 8.08694 34.1426 6.05813C32.1141 4.02932 29.6729 2.46075 26.9847 1.4589C24.2965 0.457046 21.4242 0.0453597 18.5629 0.251786C13.8649 0.622897 9.4452 2.62787 6.0713 5.91856C2.6974 9.20925 0.582364 13.5778 0.0934705 18.2657C-0.178519 21.0525 0.144724 23.8653 1.04178 26.5177C1.30767 27.2691 1.33916 28.0836 1.13209 28.8533L0.293454 31.8148C0.0395849 32.6707 -0.0387071 33.5692 0.0632815 34.4562C0.16527 35.3431 0.445436 36.2003 0.886953 36.9763C1.60967 38.2132 2.72343 39.1743 4.05265 39.7082C5.38187 40.2421 6.85094 40.3183 8.22827 39.9249L11.1635 39.0861C11.5577 38.9718 11.9659 38.9131 12.3763 38.9119C12.7889 38.9107 13.1988 38.9783 13.5891 39.1119C16.2684 40.0376 19.1147 40.3786 21.9368 40.112C26.624 39.623 30.9919 37.5077 34.2822 34.1333C37.5724 30.759 39.5771 26.3387 39.9482 21.64ZM20.0015 36.3311C18.2454 36.3342 16.5012 36.0442 14.8406 35.473C13.3058 34.9611 11.651 34.9318 10.0991 35.3891L7.16384 36.2279C6.61045 36.3874 6.0196 36.3572 5.48535 36.1421C4.9511 35.927 4.50417 35.5393 4.2157 35.0407C4.04022 34.7167 3.93154 34.3607 3.89608 33.9939C3.86062 33.627 3.89911 33.2568 4.00927 32.9051L4.85436 29.9437C5.28247 28.4192 5.23294 26.8002 4.71244 25.3047C3.98931 23.1688 3.72766 20.9038 3.94476 18.6592C4.33427 14.8764 6.03728 11.3497 8.75757 8.69273C11.4779 6.03571 15.0433 4.41643 18.8338 4.11651C19.2209 4.07134 19.6144 4.07134 20.0015 4.07134C23.4444 4.04898 26.8015 5.1448 29.5684 7.19409C32.194 9.13187 34.1701 11.8206 35.2357 14.9052C36.3013 17.9898 36.4064 21.3251 35.5369 24.4706C34.6675 27.6161 32.8645 30.4239 30.366 32.5231C27.8676 34.6222 24.7912 35.9141 21.5433 36.2279C21.0229 36.2967 20.509 36.3311 20.0015 36.3311Z"
        fill="white"
      />
      <path
        d="M13.5508 18.2655C14.6198 18.2655 15.4864 17.3989 15.4864 16.3299C15.4864 15.2609 14.6198 14.3943 13.5508 14.3943C12.4818 14.3943 11.6152 15.2609 11.6152 16.3299C11.6152 17.3989 12.4818 18.2655 13.5508 18.2655Z"
        fill="white"
      />
      <path
        d="M26.4527 18.2655C27.5217 18.2655 28.3883 17.3989 28.3883 16.3299C28.3883 15.2609 27.5217 14.3943 26.4527 14.3943C25.3837 14.3943 24.5171 15.2609 24.5171 16.3299C24.5171 17.3989 25.3837 18.2655 26.4527 18.2655Z"
        fill="white"
      />
      <path
        d="M19.2276 29.1695C19.8766 29.2824 20.5425 29.252 21.1785 29.0803C21.8144 28.9086 22.4052 28.5999 22.9092 28.1757C23.4133 27.7515 23.8184 27.2221 24.0962 26.6248C24.3741 26.0274 24.5178 25.3765 24.5175 24.7176C24.5168 24.3962 24.48 24.0759 24.4078 23.7627C24.3372 23.4764 24.1706 23.223 23.9359 23.0445C23.7011 22.8661 23.4124 22.7735 23.1176 22.782H16.8536C16.5653 22.7805 16.2847 22.8756 16.0566 23.0522C15.8286 23.2287 15.6663 23.4766 15.5957 23.7563C15.4346 24.4567 15.4501 25.1861 15.6408 25.879C15.8663 26.7106 16.323 27.4612 16.9579 28.0436C17.5928 28.626 18.3798 29.0164 19.2276 29.1695Z"
        fill="white"
      />
    </svg>
  ),
};
