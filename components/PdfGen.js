"use client";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Amrita from "../components/amritalogo.png";
import logo from "../components/logo1.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  amrita: {
    width: "50%",
    height: 100,
    float: "center",
    position: "center",
    padding: 20,
    margin: "auto",
  },
  sans: {
    width: "40%",
    height: 100,
    float: "center",
    position: "center",
    padding: 10,
    margin: "auto",
  },
  image: {
    width: 100,
    height: 50,
  },
  info: {
    padding: 20,
    display: "flex",
    width: "100%",
  },
  infoHolder: {
    fontSize: 10,
    padding: 3,
  },
});

function MyDocument({ orders, userD, user }) {
  return (
    <Document>
      {orders.map((order, index) => (
        <Page key={index} size="A4" style={styles.page}>
          <View style={styles.info}>
            <Image style={styles.amrita} src={Amrita} />
            <Image style={styles.sans} src={logo} />

            <Text style={{ marginBottom: 10, marginTop: -23, fontSize: 13 }}>
              Receipt ID: AVV/Tantrotsav24/{orders[0].orderId}
            </Text>
            <Text style={{ fontSize: 13, marginBottom: 5, marginTop: 20 }}>
              Participant Information
            </Text>
            <Text style={styles.infoHolder}>Name: {user.displayName}</Text>
            <Text style={styles.infoHolder}>Phone No: {userD?.phone}</Text>
            <Text style={styles.infoHolder}>
              Name of the institution: {userD?.clg}
            </Text>
          </View>
          <View style={{ width: "100%", padding: 10 }}>
            <Text style={{ marginBottom: 10 }}>Fee Receipt</Text>

            <View style={{ padding: 10, position: "relative", height: "30px" }}>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "10px",
                }}
              >
                S.No
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "50px",
                }}
              >
                Purpose
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "280px",
                }}
              >
                Date
              </Text>

              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "480px",
                }}
              >
                Total Amount
              </Text>
            </View>

            <View
              style={{
                padding: 10,

                position: "relative",
                height: "30px",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "10px",
                }}
              >
                1.
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "50px",
                }}
              >
                {/* {event.data.name} */}
                Tantrotsav Events
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "280px",
                }}
              >
                05/03/2024 - 06/03/2024
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  position: "absolute",
                  top: "5px",
                  left: "480px",
                }}
              >
                {"1000 rupees"}
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 10,
              justifyContent: "space-evenly",
              marginBottom: 10,
              marginTop: 50,
              float: "right",
              textAlign: "right",
              marginRight: 0,
              paddingRight: 0,
            }}
          >
            This is a computer generated receipt, hence no signature required.
          </Text>
          <Text
            style={{
              fontSize: 8,
              float: "right",
              textAlign: "justify",
              marginRight: 0,
              paddingRight: 0,
            }}
          ></Text>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {
                "Amrita Vishwa Vidyapeetham\nChennai Campus,\n337/1A, Vengal Village,\nThiruvallur Taluk & District - 601 103.\nTamil Nadu, India\nPhone: 1 800 425 90009\nEmail: btech@amrita.edu"
              }
            </Text>
            <Image style={{ height: 70, width: 300 }} src={logo} />
          </View>
        </Page>
      ))}
    </Document>
  );
}

export default MyDocument;
