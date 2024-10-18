import alice from '../assets/images/Alice.jpg';
import bob from '../assets/images/bob.jpg';
import charlie from '../assets/images/charlie.jpg';
import diana from '../assets/images/diana.jpg';
import eve from '../assets/images/eve.jpg';
import frank from '../assets/images/frank.jpg';
import grace from '../assets/images/grace.jpg';

export const taskList = [
  {
    id: '1',
    task: 'Add to favorite',
    description: 'Staring items in an array for adding to favorite',
  },
  {
    id: '2',
    task: 'Pin chats',
    description:
      'From an array of chats pin important chat to top of chat list',
  },
  {
    id: '3',
    task: 'Giving random color',
    description: 'Giving random color to each items in the list while listing',
  },
  {
    id: '4',
    task: 'DataFilter',
    description:
      'Filter set of an array based on search input, and category selection',
  },
  {
    id: '5',
    task: 'ArrayListing',
    description: 'Listing array with random color for each one.',
  },
  {
    id: '6',
    task: 'CapturePhotos',
    description: 'Capture photos and display them',
  },
  {
    id: '7',
    task: 'File selctor',
    description: 'Select file from device and displaying it',
  },
  {id: '8', task: '', description: ''},
  {id: '9', task: '', description: ''},
  {id: '10', task: '', description: ''},
];

export const foodItems = [
  {id: '1', food: 'Biryani'},
  {id: '2', food: 'Sadya'},
  {id: '3', food: 'Payasam'},
  {id: '4', food: 'Tea'},
  {id: '5', food: 'Coffie'},
  {id: '6', food: 'Unniyappam'},
];

export const dummyChatData = [
  {
    id: '1',
    name: 'Alice',
    lastMessage: 'Let’s catch up over the weekend?',
    lastMessageTime: '2024-10-08T15:30:00',
    unreadCount: 2,
    isOnline: true,
    image: alice,
  },
  {
    id: '2',
    name: 'Bob',
    lastMessage: 'I’m free on Sunday!',
    lastMessageTime: '2024-10-09T12:00:00',
    unreadCount: 0,
    isOnline: false,
    image: bob,
  },
  {
    id: '3',
    name: 'Charlie',
    lastMessage: 'Thanks for the update.',
    lastMessageTime: '2024-10-08T19:45:00',
    unreadCount: 1,
    isOnline: true,
    image: charlie,
  },
  {
    id: '4',
    name: 'Diana',
    lastMessage: 'Can you send me the report?',
    lastMessageTime: '2024-10-07T09:15:00',
    unreadCount: 3,
    isOnline: false,
    image: diana,
  },
  {
    id: '5',
    name: 'Eve',
    lastMessage: 'Let me know if you need anything.',
    lastMessageTime: '2024-10-09T08:30:00',
    unreadCount: 0,
    isOnline: true,
    image: eve,
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Meeting at 3 PM tomorrow.',
    lastMessageTime: '2024-10-08T16:45:00',
    unreadCount: 5,
    isOnline: false,
    image: frank,
  },
  {
    id: '7',
    name: 'Grace',
    lastMessage: 'I’ll check it out.',
    lastMessageTime: '2024-10-09T10:00:00',
    unreadCount: 1,
    isOnline: true,
    image: grace,
  },
];
