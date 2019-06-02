package com.nasnavapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    @Override
<<<<<<< HEAD
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

=======
    protected void onCreate(Bundle savedInstance) {
        super.onCreate(savedInstance);
         setContentView(R.layout.launch_screen);
>>>>>>> b045128823f338b98d0991755dd2411a25dfc591
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
