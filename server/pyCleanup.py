import RPi.GPIO as GPIO
# from threading import Timer

GPIO.setmode(GPIO.BCM)

pinsSelected = [26, 19]

# for i in pinsSelected:
#     GPIO.setup(i, GPIO.OUT)
#     GPIO.output(i, GPIO.HIGH)

# def cleanUp():
#   GPIO.cleanup()
# cleanUp()

# def turnOff(pins):
#   for i in pins:
#     cleanUp(i)

# t = Timer(2.0, cleanUp, args=(26))
# t.start()
# t2 = Timer(4.0, cleanUp, args=(19))
# t2.start()

# t2 = Timer(2.0, GPIO.cleanup())
# t2.start()


GPIO.cleanup()
