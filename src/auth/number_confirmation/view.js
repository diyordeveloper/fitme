import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import {PasswordHooks} from './hooks';
import React from 'react';

const NumberConfirmation = () => {
  const {
    firstInput,
    fourInput,
    onPress,
    code,
    secondInput,
    thirdInput,
    onSubmit,
    phone,
    route,
    onCodeChange
  } = PasswordHooks();

  React.useEffect(() => {
    if(code.length === 4){
      onSubmit();
    }
  }, [code]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginBottom: 100}} />
      <View style={styles.header}>
        <Text style={styles.text}>Подтверждение номера</Text>
        <Text style={styles.textOne}>Мы отправили вам код на номер</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: 20,
          }}>
          <Text style={styles.textOne}>{phone}</Text>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.btn}>
            <Text style={styles.textTwo}>Изменить номер</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 50,
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            text && secondInput.current.focus(code[0]);
            onCodeChange(text)
          }}
          ref={firstInput}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            text
              ? thirdInput.current.focus()
              : firstInput.current.focus(code[1]);
            onCodeChange(text)
          }}
          ref={secondInput}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            text
              ? fourInput.current.focus()
              : secondInput.current.focus(code[2]);
            onCodeChange(text)
          }}
          ref={thirdInput}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => {
            text
              ? fourInput.current.focus()
              : secondInput.current.focus(code[3]);
            !text && thirdInput.current.focus();
            onCodeChange(text)
          }}
          ref={fourInput}
        />
      </View>
      <View style={styles.footerBox}>
        <Text style={styles.textOne}>Вы не получили код?</Text>
        <TouchableOpacity
          onPress={onSubmit}
          activeOpacity={0.7}
          style={{borderBottomWidth: 1}}>
          <Text style={styles.textTwo}>Отправить еще раз</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberConfirmation;
