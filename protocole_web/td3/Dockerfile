FROM ubuntu:xenial

RUN apt-get update \
    && apt-get -y install apache2 vim nano libapache2-mod-php7.0 \
    && apt-get clean \
    && rm -rf /var/cache/apt/*

EXPOSE 80 443

CMD ["/usr/sbin/apachectl","-D","FOREGROUND"]
