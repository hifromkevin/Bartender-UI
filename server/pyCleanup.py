import RPi.GPIO as GPIO

def cleanUp():
  GPIO.cleanup()

cleanUp()
