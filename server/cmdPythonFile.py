import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnOff(pin):
  GPIO.setmode(GPIO.BCM)
  GPIO.output(pin, 1)


# valz = [[19,1.5],[26,3]]
valz = sys.argv[1].split()

print(sys.argv[1])

for i in valz:
  print(i)
  # GPIO.setup(i[0], GPIO.OUT, initial=1)
  # turnOnPin(i[0])

  # t = Timer(i[1], turnOff, args=[i[0]])
  # t.start()
