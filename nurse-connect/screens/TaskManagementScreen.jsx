import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const TaskManagementScreen = () => {
  // Task Lists with State for Checkboxes
  const [pendingTasks, setPendingTasks] = useState([
    { id: 1, text: "Administer medication at 2 PM", checked: false },
    { id: 2, text: "Prepare for patient discharge at 3 PM", checked: false },
    { id: 3, text: "Check blood levels for patient in 305", checked: false },
  ]);

  const [inProgressTasks, setInProgressTasks] = useState([
    { id: 4, text: "Monitoring vital signs for Room 301.", checked: false },
    { id: 5, text: "Setting up IV for Patient 302.", checked: false },
    { id: 6, text: "Assisting Patient 303 with mobility.", checked: false },
  ]);

  const completedTasks = ["Patient discharge for Room 304"];

  // Function to toggle task completion
  const toggleTask = (taskId, category) => {
    if (category === "pending") {
      setPendingTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, checked: !task.checked } : task
        )
      );
    } else if (category === "inProgress") {
      setInProgressTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, checked: !task.checked } : task
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Tasks Manage</Text>
        <Image
          source={require("../assets/profile-image.jpg")}
          style={styles.profileImage}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome back, Nurse!</Text>

      {/* Task Status Overview */}
      <View style={styles.statusContainer}>
        <View style={styles.statusBox}>
          <FontAwesome name="clock-o" size={24} color="#4359d0" />
          <Text style={styles.statusText}>Pending {pendingTasks.length}</Text>
        </View>
        <View style={styles.statusBox}>
          <FontAwesome name="arrow-right" size={24} color="#4359d0" />
          <Text style={styles.statusText}>
            In-progress {inProgressTasks.length}
          </Text>
        </View>
        <View style={styles.statusBox}>
          <FontAwesome name="check-circle-o" size={24} color="#4359d0" />
          <Text style={styles.statusText}>
            Completed {completedTasks.length}
          </Text>
        </View>
      </View>

      {/* Pending Tasks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Tasks</Text>
        {pendingTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={styles.taskRow}
            onPress={() => toggleTask(task.id, "pending")}
          >
            <FontAwesome
              name={task.checked ? "check-square" : "square-o"}
              size={22}
              color="#4359d0"
            />
            <Text style={[styles.taskText, task.checked && styles.checkedText]}>
              {task.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* In-Progress Tasks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>In-progress Tasks</Text>
        {inProgressTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={styles.taskRow}
            onPress={() => toggleTask(task.id, "inProgress")}
          >
            <FontAwesome
              name={task.checked ? "check-square" : "square-o"}
              size={22}
              color="#4359d0"
            />
            <Text style={[styles.taskText, task.checked && styles.checkedText]}>
              {task.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Completed Tasks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Tasks</Text>
        {completedTasks.map((task, index) => (
          <Text style={styles.completedTaskText} key={index}>
            ✔ {task}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#383838",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 36,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  statusBox: {
    alignItems: "center",
  },
  statusText: {
    fontSize: 17,
    marginTop: 5,
  },
  section: {
    backgroundColor: "#EDEFFD",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#383838",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  taskText: {
    fontSize: 17,
    marginLeft: 10,
    color: "#383838",
  },
  checkedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  completedTaskText: {
    fontSize: 16,
    marginLeft: 10,
    color: "blue",
  },
});

export default TaskManagementScreen;
