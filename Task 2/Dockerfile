# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY CProgram1.c .
# Compile the C program
RUN gcc -o CProgram1 CProgram1.c
# Set the command to run when the container starts
CMD ["./CProgram1"]