import "react-native-gesture-handler";
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  Alert,
} from "react-native";

class MainPage extends Component {

  errorMessage = (error_message) => {
    if (error_message == "id") {
      Alert.alert("아이디가 올바르지 않습니다.", "", [
        {
          text: "확인",
          style: "cancel",
        },
      ]);
    } else if (error_message == "pw") {
      Alert.alert("비밀번호가 올바르지 않습니다.", "", [
        {
          text: "확인",
          style: "cancel",
        },
      ]);
    } else if (error_message == "none") {
      Alert.alert("아이디와 비밀번호를 확인해주세요.", "", [
        {
          text: "확인",
          style: "cancel",
        },
      ]);
    }
  };
  render() {
    return (
      <View style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.LoginText}>Login</Text>
            </View>
            <Formik
              initialValues={{
                user_id: "",
                user_passwd: "",
              }}
              onSubmit={(values, actions)=>
              {setTimeout(()=>{
                // ID, PW value 전송 부분
                axios
                  .post("https://api.sokdaksokdak.xyz/login", values)
                  .then((response) => {
                    this.props.navigation.navigate("HOME");
                  })
                  .catch((error)=>{
                    if(error.respose.data.detail == "Bad_Username"){
                      this.errorMessage("id");
                    } else if (error.response.data.detail == "Bad_Password") {
                      this.errorMessage("pw");
                    } else {
                      this.errorMessage("none");
                    }
                  })
                // alert(JSON.stringify(values)); 전송데이터 확인용
                actions.setSubmitting(false);

              },1000)}}
              validationSchema={Yup.object().shape({
                user_id: Yup
                  .string()
                  .required('이름을 입력해주세요.'),
                user_passwd: Yup
                  .string()
                  .required('비밀번호를 다시 입력해주세요.'),
              })}
            >
            {({handleChange, handleBlur, handleSubmit, values, isSubmitting, touched, errors})=>(
            <View style={styles.formSection}>
              <View style={styles.idSection}>
                <View style={styles.idImgSection}>
                <Image style={styles.idImg} source={require('../../assets/idImg.png')}/>
                </View>
                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange('user_id')}
                  onBlur={handleBlur('user_id')}
                  value={values.user_id}
                  placeholder="userID"
                  keyboardType="default"
                />  
              </View>
              {(errors.user_id && touched.user_id) ? <Text style={styles.formWarn}>{errors.user_id}</Text> : <Text style={styles.formWarn}>{}</Text>}
              <View style={styles.pwSection}>
                <View style={styles.pwImgSection}>
                {<Image style={styles.pwImg} source={require('../../assets/pwImg.png')}/> }
                </View>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    onChangeText={handleChange('user_passwd')}
                    onBlur={handleBlur('user_passwd')}
                    value={values.user_passwd}
                    placeholder="P/W"
                    keyboardType="default"
                  /> 
              </View>
              {(errors.user_passwd && touched.user_passwd) ? <Text style={styles.formWarn}>{errors.user_passwd}</Text> : <Text style={styles.formWarn}>{}</Text>}
              <TouchableOpacity
                style={styles.subBtn}
                onPress={handleSubmit}
                disabled={isSubmitting}>
              <Text style={styles.btnText}>로그인</Text>
              </TouchableOpacity>
              {/* <CheckBox/> */}
            </View>
            )}
          </Formik>
          </SafeAreaView>
          </KeyboardAvoidingView>
      </TouchableWithoutFeedback> 
      <View style={styles.footer}>
            <View style={styles.forgotBtn}>
              <Text>forgot your  </Text>
              <TouchableOpacity><Text>ID</Text></TouchableOpacity>
              <Text>  or  </Text>
              <TouchableOpacity><Text>PassWD</Text></TouchableOpacity>
              <Text>? </Text>
            </View>
            <TouchableOpacity style={styles.signUpBtn} onPress={() => {this.props.navigation.navigate("REGISTER")}}><Text>Don't have an account? - Sign Up!</Text></TouchableOpacity>
      </View> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboard: {
    flex: 2,
  },
  header:{
    flex:1,
    justifyContent:"center",
  },
  LoginText:{
    fontSize : 35,
    fontWeight: "bold",
  },
  logoImg:{
    resizeMode: "contain",
  },
  formSection:{},
  idSection:{
    flexDirection:"row",
    borderWidth: 0,
    padding:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  idImgSection:{
    width: Dimensions.get("screen").width * 0.15,
    alignItems:"center",
    justifyContent:"center",
  },
  idImg:{
    resizeMode:"contain",
    flex:1,
    transform:[{scale:0.7}],
  },
  pwSection:{
    flexDirection:"row",
    borderWidth: 1,
    marginTop: 0,
    padding:5,
    borderWidth:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  pwImgSection:{
    width: Dimensions.get("screen").width * 0.15,
    alignItems:"center",
    justifyContent:"center",
  },
  pwImg:{
    resizeMode:"contain",
    flex:1,
    transform:[{scale:0.7}],
  },
  textinput: {
    width: Dimensions.get("screen").width * 0.74,
    height: 50,
    borderColor: "#C1C1C1",
    fontSize: 16,
  },
  subBtn: {
    marginTop: 50,
    width: Dimensions.get("screen").width * 0.9,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    alignSelf:"center",
    backgroundColor:"#a6e8ca",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  formWarn: {
    fontSize:8,
    color:"red",
    paddingLeft: 20,
    margin: 3,
  },
  footer: {
    flex : 1,
    marginTop : 30,
    alignItems : "center", 
  },
  forgotBtn: {
    padding : 10,
    flexDirection: "row",
  },
  signUpBtn: {
    padding: 10,
  }
});

export default MainPage;