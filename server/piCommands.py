import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.output(pin, True)
  print('PIN ON: ' + pin)

def turnOffPin(pin):
  GPIO.output(pin, False)
  print('PIN OFF: ' + pin)

def cleanUp():
  GPIO.cleanup()