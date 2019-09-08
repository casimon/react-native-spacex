# SpaceX Challenge 🚀

This spaceX challenge uses:

- [x] React Native 0.60.5
- [x] React Navigation
- [x] TypeScript
- [x] Redux
- [x] Axios
- [x] Redux Axios Middleware

## Install instructions

Open a terminal and cd to the root of the spaceX folder and run:

```
yarn
```

Go to the ios folder and run:

```
pod install
```

You are ready to launch 🚀

## Test instructions

Go to the root of the spaceX folder and run:

```
yarn test
```

## Run on Android Emulator

Ensure you have an emulator set up and running. Go to Android Virtual Device Manager and launch an AVD in emulator

In a terminal type:

```
adb devices
```

You should see something like:

```
List of devices attached
emulator-5554   device
```

Ensure you at the root of the spaceX folder and run:

```
react-native run-android
```

## Run on iOS Simulator

Ensure you are at the root of the spaceX folder and run:

```
react-native run-ios
```

## Caveats

This spaceX app is intended to be an MVP that could be delivered in hours not days. Some nice to haves if time permitted:

- Search is by mission name not by rocket name to show filtering
- Splash screens
- Fix all typescript linting errors
- Animated loading screen
- Map page with launch site pins by lat/long coordinates
- Infinite scroll in mission list
- Unit tests for reducers, screens, navigators etc
- More rocket info
