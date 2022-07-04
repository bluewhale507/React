import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  Keyboard,
} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";

class RegistPage extends Component {
  render() {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.keyboard}>
          <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>SignUp</Text>
              </View>
              <Formik
                initialValues={{
                  userClass:"",
                  userID:"",
                  userPW:"",
                  userNickName:"",
                  userGrade:"",
                  userClass:"",
                  userClassNum:"",
                  setCrtCode:"",
              }}
              onSubmit ={(values,actions)=>{
                setTimeout(()=>{
                  alert(JSON.stringify(values));
                  actions.setSubmitting(false);
                },1000)}}
              validationSchema={Yup.object().shape({
                userID: Yup
                .string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,'영문,숫자를 반드시 포함하여 6~20자 이내로 작성하세요.')
                .required('아이디를 입력해주세요.'),
                userPW: Yup
                .string()
                .matches(/(?=.*\d{1,20})(?=.*[~`!@#$%\^&*()-+=]{1,20})(?=.*[a-zA-Z]{2,20}).{8,20}$/,'영문,숫자,특수문자를 반드시 포함하여 8~20자리로 작성하세요.')
                .required('비밀번호를 입력해주세요.'),
                userNickName: Yup
                .string()
                // .matches()
                .required('닉네임을 입력해주세요.'),
                userGrade: Yup
                .number()
                .required('학년을 선택해주세요.'),
                userClass: Yup
                .number()
                .required('학반을 선택해주세요.'),
                userClassNum: Yup
                .number()
                .required('학번을 선택해주세요.'),
                userName: Yup
                .string()
                .required('이름을 입력해주세요'),                                
                setCrtCode: Yup
                .string()
                // .matches()   
                .required('보안코드를 입력해주세요')
                })} 
              >
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting, touched, errors})=>(
                            <View style={styles.form}>
                                <View style={styles.multiInput}>
                                    <TextInput
                                        style={styles.userGrade}
                                        onChangeText={handleChange('userGrade')}
                                        onBlur={handleBlur('userGrade')}
                                        value={values.userGrade}
                                        placeholder="학년"
                                        keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.userClass}
                                        onChangeText={handleChange('userClass')}
                                        onBlur={handleBlur('userClass')}
                                        value={values.userClass}
                                        placeholder="학반"
                                        keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.userClassNum}
                                        onChangeText={handleChange('userClassNum')}
                                        onBlur={handleBlur('userClassNum')}
                                        value={values.userClassNum}
                                        placeholder="학번"
                                        keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.userName}                                    
                                        onChangeText={handleChange('userName')}
                                        onBlur={handleBlur('userName')}
                                        value={values.userName}
                                        placeholder="이름"
                                        keyboardType="default"
                                    />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={handleChange('userNickName')}
                                    onBlur={handleBlur('userNickName')}
                                    value={values.userNickName}
                                    placeholder="NickName"
                                    keyboardType="default"
                                />
                                {(errors.userNickName && touched.userNickName) && <Text style={styles.formWarn}>{errors.userNickName}</Text>}
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={handleChange('userID')}
                                    onBlur={handleBlur('userID')}
                                    value={values.userID}
                                    placeholder="ID"
                                    keyboardType="default"
                                />
                                {(errors.userID && touched.userID) && <Text style={styles.formWarn}>{errors.userID}</Text>}
                                <TextInput
                                    secureTextEntry={true}   
                                    style={styles.textInput}
                                    onChangeText={handleChange('userPW')}
                                    onBlur={handleBlur('userPW')}
                                    value={values.userPW}
                                    placeholder="P/W"
                                    keyboardType="default"
                                />
                                {(errors.userPW && touched.userPW) && <Text style={styles.formWarn}>{errors.userPW}</Text>}
                                <View style={styles.multiInput}>
                                    <TextInput
                                        style={styles.userEmail}
                                        onChangeText={handleChange('userGrade')}
                                        placeholder="email"
                                        keyboardType="numeric"
                                    />
                                    <TextInput
                                        style={styles.dns}
                                        onChangeText={this.setUserClass}
                                        placeholder=".com"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={handleChange('setCrtCode')}
                                    onBlur={handleBlur('setCrtCode')}
                                    value={values.setCrtCode}
                                    placeholder="CertificationCode"
                                    keyboardType="default"
                                />
                                {(errors.setCrtCode && touched.setCrtCode) && <Text style={styles.formWarn}>{errors.setCrtCode}</Text>}
                                <TouchableOpacity style={styles.formSubBtn} onPress={handleSubmit} disabled={isSubmitting}><Text>Submission</Text></TouchableOpacity>
                            </View>
                        )}   
                        </Formik>
                        <View style={styles.footer}>
                        </View>
                    </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback> 
    );
  }
}

const styles = StyleSheet.create({
  keyboard:{
    flex:1,
  },
  safe:{
    flex:1,
  },
  container: {
      backgroundColor: "white",
      width: "100%",
      height: "100%",
      flex:1,
  },
  header:{
      flex:1,
      // backgroundColor:"orange",
      alignItems:"center",
  },
  headerText: {
      marginTop : 50,
      padding : 10,
      height : 100,
      fontSize : 35,
      fontWeight : "bold",
      textAlign : "center",
  },
  form:{
      flex:2,
      marginTop: 30,
      // backgroundColor:"green",
  },
  multiInput:{
      // backgroundColor:"yellow",
      flexDirection:"row",
      height: 40, 
      marginLeft: 20,
      marginRight: 20,
      margin: 7,
      borderRadius: 18,
  },
  userGrade:{
      backgroundColor: "#a6e8ca",
      borderColor:"#a6e8ca",
      flex:1,
      borderWidth: 1,
      borderRadius: 10,
      marginRight: 3,
      padding: 10,
      },
  userClass:{
      backgroundColor: "#a6e8ca",
      borderColor:"#a6e8ca",
      flex:1,
      borderWidth: 1,
      borderRadius: 10,
      marginRight: 3,
      padding: 10,
  },
      userClassNum:{
          backgroundColor: "#a6e8ca",
          borderColor:"#a6e8ca",
          flex:1,
          borderWidth: 1,
          borderRadius: 10,
          marginRight: 3,
          padding: 10,


      },
      userName:{
          backgroundColor: "#a6e8ca",
          borderColor:"#a6e8ca",
          flex:3,
          borderWidth: 1,
          borderRadius: 10,
          marginRight: 3,
          padding: 10,

      },
      userEmail:{
          backgroundColor: "#a6e8ca",
          borderColor:"#a6e8ca",
          flex:3,
          borderWidth: 1,
          borderRadius: 10,
          marginRight: 3,
          padding: 10,
      },
      dns:{
          backgroundColor: "#a6e8ca",
          borderColor:"#a6e8ca",
          flex:5,
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
      },
  textInput: {
      backgroundColor: "#a6e8ca",
      borderColor:"#a6e8ca",
      height:40,
      marginRight: 20,
      marginLeft: 20,
      margin: 7,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,

  },
  formWarn:{
      fontSize:8,
       color:"red",
      paddingLeft: 30,
      margin: 5,
  },
  footer: {
      flex:1,
      // backgroundColor: "red",
  },
  formSubBtn: {
      alignItems:"center",
      backgroundColor:"#a6e8ca",
       margin: 20,
      padding: 10,
      borderRadius: 10,

  }
});

export default RegistPage;
