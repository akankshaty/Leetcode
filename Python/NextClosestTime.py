class Solution:
    def nextClosestTime(self, time):
        """
        :type time: str
        :rtype: str
        """

        split_time = time.split(":")
        mins = int(split_time[0])*60 + int(split_time[1])
        digits = [int(x) for x in split_time[0]] + [int(y) for y in split_time[1]]

        temp_digits = []
        while True:
            mins = (mins + 1) % 1440
            temp_time = divmod(mins,60)
            temp_hr = temp_time[0]
            temp_min = temp_time[1]
            temp_digits = [x for x in divmod(temp_hr, 10)]
            temp_digits += [x for x in divmod(temp_min, 10)]

            if all(item in digits for item in temp_digits):
                return "{:02d}:{:02d}".format(*temp_time)
