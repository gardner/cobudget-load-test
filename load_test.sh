#!/bin/bash

for run in {1..5}
do
  protractor conf.js &
	echo $run
done

wait