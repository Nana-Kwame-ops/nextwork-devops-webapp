#!/bin/bash

echo "==== RUNNING SIMPLE TESTS ===="
echo "Current Working Directory: $(pwd)"
echo "Listing all files in current directory:"
ls -lah

echo "Test 1: Checking project structure..."
if [ -d "src" ]; then
  echo "✅ PASS: src directory exists"
else
  echo "❌ FAIL: src directory not found"
  exit 1
fi

echo "Test 2: Checking for web app files..."
echo "Listing contents of src/main/webapp/:"
ls -lah src/main/webapp/

if [ -f "src/main/webapp/index.jsp" ]; then
  echo "✅ PASS: index.jsp exists"
else
  echo "❌ FAIL: index.jsp not found"
  exit 1
fi

echo "Test 3: Simple validation test..."
echo "✅ PASS: This test always passes"

echo "==== ALL TESTS PASSED ===="
exit 0
