import RPi.GPIO as GPIO
from threading import Timer

GPIO.setmode(GPIO.BCM)

pins = [26, 19]

for i in pins:
    GPIO.setup(i, GPIO.OUT)
    GPIO.output(i, GPIO.HIGH)

def cleanUp():
  GPIO.cleanup()
t = Timer(2.0, cleanUp())
t.start()