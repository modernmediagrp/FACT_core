import logging
import os
from pathlib import Path

import pytest

from helperFunctions.config import get_config_dir, get_temp_dir_path, load_config
from test.common_helper import get_test_data_dir

from config import parse_comma_separated_list


def test_get_config_dir():
    assert os.path.exists(f'{get_config_dir()}/main.cfg'), 'main config file not found'


def test_load_config(monkeypatch):
    monkeypatch.setattr('helperFunctions.config.get_config_dir', lambda: f'{get_test_data_dir()}/helperFunctions')
    test_config = load_config('test.cfg')
    assert test_config['test']['test'] == 'test_config', 'config not correct'


@pytest.mark.parametrize('input_data, expected', [
    ('', []),
    ('item1', ['item1']),
    ('item1, item2, item3', ['item1', 'item2', 'item3']),
    ('item1,item2,item3', ['item1', 'item2', 'item3']),
    (' item1 , item2 , item3 ', ['item1', 'item2', 'item3']),
])
def test_parse_comma_separeted_list(input_data, expected):
    result = parse_comma_separated_list(input_data)
    assert result == expected


class MockConfig:
    def __init__(self, folder: str):
        self.dir = folder

    def get(self, *_, **__):
        return self.dir


def test_get_temp_dir_path(caplog):
    assert get_temp_dir_path() == '/tmp'
    assert get_temp_dir_path(MockConfig(get_test_data_dir())) == get_test_data_dir()
    not_a_dir = str(Path(get_test_data_dir()) / '__init__.py')
    with caplog.at_level(logging.WARNING):
        assert get_temp_dir_path(MockConfig(not_a_dir)) == '/tmp'
        assert 'TempDir path does not exist and could not be created' in caplog.messages[0]
