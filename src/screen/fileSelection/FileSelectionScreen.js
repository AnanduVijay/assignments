import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FileSelectionButton from '../../components/FileSelectionButton';
import FileDisplayCard from '../../components/FileDisplayCard';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import PluseButton from '../../components/PluseButton';

const FileSelectionScreen = () => {
  const [file, setFile] = useState(null);
  console.log('FILE:', file);
  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (res) {
        setFile(res[0]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown error:' + JSON.stringify(err));
      }
    }
  };

  const viewFile = async () => {
    if (file) {
      try {
        await FileViewer.open(file.uri);
      } catch (err) {
        console.log('Cannot open file', err);
      }
    }
  };
  return (
    <View style={styles.container}>
      {file ? (
        <View style={styles.buttonContainer}>
          <FileDisplayCard
            file={file}
            onPress={() => {
              viewFile();
            }}
          />

          <PluseButton
            onPress={() => {
              selectFile();
            }}
          />
        </View>
      ) : (
        <FileSelectionButton onPress={() => selectFile()} />
      )}
    </View>
  );
};

export default FileSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {},
});
