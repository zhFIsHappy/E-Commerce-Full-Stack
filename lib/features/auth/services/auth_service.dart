import 'package:amazon_clone/constants/error_handler.dart';
import 'package:amazon_clone/constants/global_variables.dart';
import 'package:amazon_clone/constants/utils.dart';
import 'package:flutter/material.dart';

import '../../../models/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  // sign up user
  void signUpUser({
    required BuildContext context,
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      User user = User(
        id: '',
        name: name,
        password: password,
        email: email,
        address: '',
        type: '',
        token: '',
      );

      http.Response res = await http.post(
        Uri.parse('$uri/api/signup'),
        body: user.toJson(),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
      );
      httpErrorHandle(
        response: res,
        context: context,
        onSuccess: () {
          showSnackBAr(context, 'Successfully Created Account');
        },
      );
    } catch (e) {
      showSnackBAr(context, e.toString());
    }
  }
}
