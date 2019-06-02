package com.nasnavapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
=======
import com.mapbox.rctmgl.RCTMGLPackage;
>>>>>>> b045128823f338b98d0991755dd2411a25dfc591
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.mapbox.rctmgl.RCTMGLPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new ReactNativeFingerprintScannerPackage(),
=======
            new RCTMGLPackage(),
>>>>>>> b045128823f338b98d0991755dd2411a25dfc591
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new SplashScreenReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
