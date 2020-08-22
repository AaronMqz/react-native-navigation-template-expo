import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { navigationConfig } from "../config/navigationConfig";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const {
    initialRouteName,
    stacks,
    tabBarOptions,
    iconsSize,
  } = navigationConfig;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        tabBarOptions={tabBarOptions}
      >
        {stacks.map((stack, index) => {
          return (
            <Tab.Screen
              key={index}
              name={stack.name}
              component={CreateStack(stack.views)}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon
                    type="font-awesome"
                    name={stack.icon}
                    size={iconsSize}
                    color={color}
                  />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const CreateStack = (views) => {
  const Stack = createStackNavigator();
  const StackScreen = () => {
    return (
      <Stack.Navigator>
        {views.map((view, index) => {
          return (
            <Stack.Screen
              key={index}
              name={view.name}
              component={view.component}
              options={view.options}
            />
          );
        })}
      </Stack.Navigator>
    );
  };
  return StackScreen;
};

export default Navigation;
