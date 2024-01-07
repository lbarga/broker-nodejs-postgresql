-- postgres broker with listen/notify

NOTIFY another_watcher, 'Another Message!';

NOTIFY message_watcher, 'Main Message!';