FROM circleci/node:10.14-browsers

LABEL maintainer="Meemaw <ematej.snuderl@gmail.com>"

LABEL "com.github.actions.name"="testcafe"
LABEL "com.github.actions.description"="Runs testcafe inside container that has all popular browsers pre-installed"
LABEL "com.github.actions.icon"="terminal"
LABEL "com.github.actions.color"="purple"

COPY . /app
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["help"]

