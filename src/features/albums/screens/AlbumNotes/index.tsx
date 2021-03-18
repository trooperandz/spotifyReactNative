import React, { FC, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';

import { Button } from 'components/Button';
import { AlbumStackNavProps } from 'navigations/AlbumStack/types';
import { styles } from './styles';

export const NOTES_TEST_ID = 'notes-text';
export const PLACEHOLDER_TEXT = 'Enter album notes';

export const AlbumNotes: FC<AlbumStackNavProps<'AlbumNotes'>> = ({ route }) => {
  const { albumId, albumName } = route.params;

  const [notes, setNotes] = useState('');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeText = (text: string) => {
    setInputText(text);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: inputText,
        albumId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          setNotes(json.body);
          setIsLoading(false);
          setInputText('');
        }, 850);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Title</Text>
        <View style={styles.separator} />
        <Text style={styles.infoText}>{albumName}</Text>

        <Text style={styles.sectionTitle}>Notes</Text>
        <View style={styles.separator} />
        {notes ? (
          <Text style={styles.infoText} testID={NOTES_TEST_ID}>
            {notes}
          </Text>
        ) : null}

        <TextInput
          onChangeText={handleChangeText}
          placeholder={PLACEHOLDER_TEXT}
          style={styles.input}
          value={inputText}
        />

        <Button
          isLoading={isLoading}
          onPress={handleSubmit}
          style={styles.button}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
