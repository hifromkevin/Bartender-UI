import RPi.GPIO as GPIO
from threading import Timer

GPIO.setmode(GPIO.BCM)

pinsSelected = [26, 19]

for i in pinsSelected:
    GPIO.setup(i, GPIO.OUT)
    GPIO.output(i, GPIO.HIGH)

def turnOff(pins):
  for i in pins:
    GPIO.setup(i, GPIO.OUT)
    GPIO.output(i, GPIO.LOW)

t = Timer(2.0, turnOff(pinsSelected))
t.start()


def cleanUp():
  GPIO.cleanup()

t2 = Timer(2.0, cleanUp())
t2.start()
