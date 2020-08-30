#include <WiFi.h>
#include "time.h"
#include <U8x8lib.h>

// the OLED used
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 15, /* data=*/ 4, /* reset=*/ 16);

const char* ssid       = "UPCFB8C751";
const char* password   = "npz6jzMpbjzw";

const char* ntpServer = "pool.ntp.org";
const long  gmtOffset_sec = 7200;
const int   daylightOffset_sec = 3600;

void setup(){
  u8x8.begin();
  u8x8.setFont(u8x8_font_chroma48medium8_r); 
 
  Serial.begin(115200);
  
  //connect to WiFi
  Serial.printf("Connecting to %s ", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
  }
  Serial.println(" CONNECTED");
  
  //init and get the time
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  printDayOfWeek();
  printCalendar();
  printTime();

  //disconnect WiFi as it's no longer needed
  WiFi.disconnect(true);
  WiFi.mode(WIFI_OFF);
}

void printDayOfWeek(){
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }
  
  char dayOfWeek[15];
  strftime(dayOfWeek, sizeof(dayOfWeek), "%A", &timeinfo);
  
  Serial.println(dayOfWeek);
  u8x8.drawString(0, 1, dayOfWeek);
}

void printCalendar(){
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }

  char calendar[30];
  strftime(calendar, sizeof(calendar), "%B %d %Y", &timeinfo);
  
  Serial.println(calendar);
  u8x8.drawString(0, 3, calendar);  
}

void printTime(){
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }
  //Serial.println(&timeinfo);
  //Serial.println("%A, %B %d %Y %H:%M:%S");

  char myTime[15];
  strftime(myTime, sizeof(myTime), "%H:%M:%S", &timeinfo);
  
  Serial.println(myTime);
  u8x8.drawString(0, 5, myTime);  
}

void loop(){  
  printDayOfWeek();
  printCalendar();
  printTime();
  delay(1000);
}
