import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/api/users') // 10.0.2.2 dùng cho emulator Android
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Danh sách người dùng:</Text>
      {users.map(user => (
        <Text key={user.id}>• {user.name}</Text>
      ))}
    </View>
  );
}

